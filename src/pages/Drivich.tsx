import { myFullProjects } from "../shared";
import { PageWidget } from "../widgets";

export default function Drivich() {
  const { ...drivich } = myFullProjects[1];
  return <PageWidget {...drivich} />;
}
