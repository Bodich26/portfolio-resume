import { myFullProjects } from "../shared";
import { PageWidget } from "../widgets";

export default function Grind() {
  const { ...grind } = myFullProjects[3];
  return <PageWidget {...grind} />;
}
