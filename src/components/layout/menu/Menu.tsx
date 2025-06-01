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
        "Dimsum kukus.",
    },
    {
      id: 2,
      title: "Hakau",
      category: "dimsum",
      description:
        "Dimsum berbentuk bulan sabit dengan kulit yang bening, berisi udang. ",
    },
    {
      id: 3,
      title: "Bakpao",
      price: 35,
      category: "dimsum",
      description:
        "Dimsum berbentuk bulat dengan isian daging atau char siu.",
    },
  ],
  gurami: [
    {
      id: 1,
      category: "gurami",
      title: "Gurami Rujak",
      description: "Gurami yang dibaluri dengan pedasnya saus rujak",
    },
    {
      id: 2,
      category: "gurami",
      title: "Gurami Asam Manis",
      description:
        "Gurami yang dibaluri dengan Saus Asam Manis",
    },
    {
      id: 3,
      category: "gurami",
      title: "Gurami Goreng Telur Asin",
      description:
        "Gurami yang di goreng dibaluri Telor Asin",
    },
  ],
  tofu: [
    {
      id: 1,
      category: "tofu",
      title: "Tahu Siram Shimeji",
      description: "Perpaduan tekstur tahu yang lembut, ditambah tumisan jamur dengan bumbu menciptakan rasa begitu spesial",
    },
    {
      id: 2,
      category: "tofu",
      title: "Tahu Kantong",
      description:
        "Tahu kantong harta karun adalah variasi tahu isi yang unik, dengan rasa gurih dan tekstur yang lembut. Tahu ini diisi dengan campuran bumbu dan bahan-bahan lain, lalu dikemas dalam bentuk kantong menyerupai harta karun.",
    },
    {
      id: 3,
      category: "tofu",
      title: "Mapo Tahu",
      description:
        "Hidangan ini terbuat dari tahu yang dimasak dengan saus kental berbumbu khas yang kaya rempah, biasanya dilengkapi dengan daging cincang",
    },
  ],
  bebek: [
    {
      id: 1,
      category: "bebek",
      title: "Bebek Panggang",
      description: "Bebek yang dipanggang.",
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
