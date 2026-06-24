import PageAdmin from "./(store)/page";
import AdminWrapper from "@/shared/components/layouAdmin/AdminWrapper";

export default function Home() {
  return (
    <AdminWrapper>
      <PageAdmin />
    </AdminWrapper>
  );
}
