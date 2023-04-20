"use client"

import {redirect} from "next/navigation";
import {Providers} from "@/store/Providers";

export default async function Home() {

  return (
    <main>
      <Providers>
        {redirect("/home")}
      </Providers>
    </main>
  )
}
