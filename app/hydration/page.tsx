import { dehydrate } from "@tanstack/query-core";
import ListUsers from "./list-users";
import { HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getUsers } from "@/utils/api-requests";

export default async function Hydation() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["hydrate-users"],
    queryFn: getUsers,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ListUsers />
    </HydrationBoundary>
  );
}
