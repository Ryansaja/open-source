"use client";
import TabsProduct from "@/components/modules/Product/TabsProduct";
import MenuItem from "@/components/ui/MenuItem";
import { paddingBot, paddingTop } from "@/utils/props";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import useMenuTabsStore from "../../../stores/useMenuTabsStore";

const menu = {
  dimsum: [
    {
      id: 1,
      title: "Siomay",
      category: "dimsum",
      description:
        "Siomay adalah dimsum khas Indonesia yang terbuat dari ikan tenggiri, tahu, telur, kentang, dan kol, disajikan dengan bumbu kacang, kecap manis, sambal, dan perasan jeruk limau."
    },
    {
      id: 2,
      title: "Hakau",
      category: "dimsum",
      description:
        "Hakau adalah dimsum kukus berbentuk bulan sabit dengan kulit bening dan isian udang utuh yang juicy."
    },
    {
      id: 3,
      title: "Bakpao",
      price: 35,
      category: "dimsum",
      description:
        "Bakpao adalah roti kukus lembut berisi daging ayam, kacang merah, atau char siu yang manis dan gurih."
    },
  ],
  gurami: [
    {
      id: 1,
      category: "gurami",
      title: "Gurami Rujak",
      description: "Gurami goreng disiram saus rujak pedas manis khas Indonesia, segar dan menggugah selera."
    },
    {
      id: 2,
      category: "gurami",
      title: "Gurami Asam Manis",
      description:
        "Gurami goreng renyah disajikan dengan saus asam manis segar dari nanas dan tomat."
    },
    {
      id: 3,
      category: "gurami",
      title: "Gurami Goreng Telur Asin",
      description:
        "Gurami goreng krispi dibalut saus telur asin gurih dan creamy."
    },
  ],
  tofu: [
    {
      id: 1,
      category: "tofu",
      title: "Tahu Siram Shimeji",
      description: "Tahu lembut disiram tumisan jamur shimeji dan saus gurih, cocok untuk pecinta vegetarian."
    },
    {
      id: 2,
      category: "tofu",
      title: "Tahu Kantong",
      description:
        "Tahu isi sayuran dan daging, dibungkus seperti kantong, digoreng hingga renyah di luar dan lembut di dalam."
    },
    {
      id: 3,
      category: "tofu",
      title: "Mapo Tahu",
      description:
        "Tahu lembut dimasak dengan saus pedas khas Sichuan dan daging cincang, kaya rasa dan aroma."
    },
  ],
  bebek: [
    {
      id: 1,
      category: "bebek",
      title: "Bebek Panggang",
      description: "Bebek utuh dipanggang hingga kulitnya renyah dan dagingnya juicy, disajikan dengan saus spesial."
    },
  ],
};

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Menu({ pb = "md", pt = "md" }: Props) {
  const { tab, setTab } = useMenuTabsStore();

  return (
    <section
      id="Menu"
      className={clsx(
        "bg-light-ivory relative",
        paddingTop[pt],
        paddingBot[pb]
      )}
    >
      <div id="menu" className="absolute -top-20"></div>
      <div className="container container--xs">
        <div className="mx-auto">
          <h2 className="relative mb-4 text-4xl font-bold text-center font-brush text-neutral-900">
            <span className="relative z-10">Our Menu</span>
          </h2>
        </div>

        <TabsProduct tab={tab} setTab={setTab} />

        {tab == 0 &&
          menu.dimsum?.map(({ id, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
            />
          ))}
        {tab == 1 &&
          menu.gurami?.map(({ id, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
            />
          ))}
        {tab == 2 &&
          menu.tofu?.map(({ id, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
            />
          ))}
        {tab == 3 &&
          menu.bebek?.map(({ id, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
            />
          ))}
      </div>
    </section>
  );
}
