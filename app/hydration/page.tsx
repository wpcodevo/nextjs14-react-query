import getQueryClient from '@/utils/getQueryClient';
import { dehydrate } from '@tanstack/query-core';
import ListUsers from './list-users';
import { HydrationBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { getUsers } from '@/utils/api-requests';

export default async function Hydation() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['hydrate-users'],
    queryFn: getUsers,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HydrationBoundary state={dehydratedState}>
        <ListUsers />
      </HydrationBoundary>
    </Suspense>
  );
}
