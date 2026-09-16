import { myFullProjects } from "../shared";
import { PageWidget } from "../widgets";

export default function Nikey() {
  const { ...nikey } = myFullProjects[0];
  return <PageWidget {...nikey} />;
}
