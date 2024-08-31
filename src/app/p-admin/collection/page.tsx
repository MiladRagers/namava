import Title from "@/components/modules/p-admin/Title";
import AddNewCollection from "@/components/templates/p-admin/collection/AddNewCollection";
import { getAllMoviesWithOutPagination } from "@/src/libs/service/services";

async function SlidersPage() {
  const [movies] = await Promise.all([getAllMoviesWithOutPagination()]);
  return (
    <div>
      <Title name="ساخت مجموعه" />
      <AddNewCollection movies={JSON.parse(JSON.stringify(movies))} />
    </div>
  );
}

export default SlidersPage;
