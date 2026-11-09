import { getIELTSTestById } from "@/data/ieltsTests";
import TestRunnerClient from "@/components/TestRunnerClient";

export default async function TestRunnerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const testData = getIELTSTestById(id);

  return <TestRunnerClient testData={testData} />;
}
