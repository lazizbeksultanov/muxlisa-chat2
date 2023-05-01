"use client"

import {redirect} from "next/navigation";

export default async function Home() {

  return (
    <main>
        {redirect("/home")}
    </main>
  )
}
