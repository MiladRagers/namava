import EditUser from "@/src/components/templates/p-user/EditUser";
import EditUserInfo from "@/src/components/templates/p-user/EditUserInfo";

function page() {
  return (
    <div className="space-y-6">
      <EditUser />
      <EditUserInfo />
    </div>
  );
}

export default page;
