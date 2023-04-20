import { NextResponse } from 'next/server';
import getMainAxiosBack from "@/utils/axiosBack";

export async function GET() {

    const getAxiosBack = getMainAxiosBack()

    const res = await getAxiosBack.get("/users").then(res => res.data)

    return NextResponse.json({data: res})
}