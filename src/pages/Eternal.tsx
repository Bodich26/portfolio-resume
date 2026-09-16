import { myFullProjects } from "../shared";
import { PageWidget } from "../widgets";

export default function Eternal() {
  const { ...eternal } = myFullProjects[2];
  return <PageWidget {...eternal} />;
}
