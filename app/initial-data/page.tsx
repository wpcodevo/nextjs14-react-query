import { getUsers } from '@/utils/api-requests';
import ListUsers from './list-users';

export default async function InitialData() {
  const users = await getUsers();

  return <ListUsers users={users} />;
}
