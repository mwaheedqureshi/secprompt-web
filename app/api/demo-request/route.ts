import { NextResponse } from "next/server";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

type DemoRequest = {
  fullName?: string;
  email?: string;
  company?: string;
  companySize?: string;
  currentProcess?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as DemoRequest;

  if (!body.fullName || !body.email || !body.company || !body.companySize || !body.currentProcess) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const record = {
    fullName: body.fullName,
    email: body.email,
    company: body.company,
    companySize: body.companySize,
    currentProcess: body.currentProcess,
    message: body.message ?? "",
    createdAt: new Date().toISOString(),
  };

  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "demo-requests.json");
  await mkdir(dataDir, { recursive: true });

  let existing: typeof record[] = [];
  try {
    existing = JSON.parse(await readFile(filePath, "utf8")) as typeof record[];
  } catch {
    existing = [];
  }

  existing.push(record);
  await writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");

  return NextResponse.json({ success: true });
}
