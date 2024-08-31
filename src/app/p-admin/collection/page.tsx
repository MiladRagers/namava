import Title from "@/components/modules/p-admin/Title";
import AddNewCollection from "@/components/templates/p-admin/collection/AddNewCollection";
import CollectionList from "@/components/templates/p-admin/collection/CollectionList";
import {
  getAllCollcetions,
  getAllMoviesWithOutPagination,
} from "@/src/libs/service/services";
import { TAdminPage } from "@/src/libs/types";

async function SlidersPage({ searchParams }: TAdminPage) {
  const [movies, data]: any = await Promise.all([
    getAllMoviesWithOutPagination(),
    getAllCollcetions(+searchParams?.page, searchParams?.q),
  ]);

  return (
    <div>
      <Title name="ساخت مجموعه" />
      <AddNewCollection movies={JSON.parse(JSON.stringify(movies))} />
      <Title name="لیست مجموعه ها" />
      <CollectionList
        collections={JSON.parse(JSON.stringify(data.collections))}
        counts={data.counts}
      />
    </div>
  );
}

export default SlidersPage;
