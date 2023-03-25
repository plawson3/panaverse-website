import DocsLayout from "./index";
import { useRouter } from "next/router";
import Quarter1 from "../../components/quarter1";
import Quarter2 from "../../components/quarter2";
import Quarter3 from "../../components/quarter3";
import Quarter4 from "../../components/quarter4";
import MyCourses from "../../components/CoursesDetail";

export default function Page() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <DocsLayout>
      {id === "quarter-1" ? (
        <Quarter1 key={'q1'} />
      ) : id === "quarter-2" ? (
        <Quarter2 key={'q2'} />
      ) : id === "quarter-3" ? (
        <Quarter3 key={'q3'} />
      ) : id === "quarter-4" ? (
        <Quarter4 key={'q4'} />
      ) : (
        <MyCourses key={'c1'} />
      )}
    </DocsLayout>
  );
}
