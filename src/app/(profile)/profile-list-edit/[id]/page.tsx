import WatchLimit from "@/src/components/templates/profile/WatchLimit";
import { getSpecificProfile } from "@/src/libs/service/services";

async function page({ params }: { params: { id: string } }) {
  const profile = await getSpecificProfile(params?.id);

  return <WatchLimit profile={JSON.parse(JSON.stringify(profile))} />;
}

export default page;
