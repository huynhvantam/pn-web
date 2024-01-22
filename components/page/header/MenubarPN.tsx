import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link"
import Image from 'next/image'
const menulist: { trigger: string; href?: string,content?:{title?:string, hrefsub?:string}[] }[] = [
  {
    trigger: "Trang chủ",
    href: "/"
  },
  {
    trigger: "Về chúng tôi",
    href: "/",
    content: [
      { title: "Giới thiệu chung", hrefsub: "/docs/primitives/alert-dialog/school" },
      { title: " Thông điệp giáo dục", hrefsub: "/docs/primitives/alert-dialog/student" },
       { title: "Tầm nhìn sứ mệnh", hrefsub: "/docs/primitives/alert-dialog/school" },
      { title: " Cơ sở vật chất", hrefsub: "/docs/primitives/alert-dialog/student" },
       { title: "Hợp tác quốc tế", hrefsub: "/docs/primitives/alert-dialog/school" },
      { title: "Thành tích nhà trường", hrefsub: "/docs/primitives/alert-dialog/student" }
    ]
  },
  {
    trigger: "Chương trình đào tào",
    href: "/",
    content: [
      { title: "Tổng quan chương trình", hrefsub: "/docs/primitives/alert-dialog/school" },
      { title: " Mầm non", hrefsub: "/docs/primitives/alert-dialog/student" },
       { title: " Tiểu học", hrefsub: "/docs/primitives/alert-dialog/school" },
      { title: " Trung học", hrefsub: "/docs/primitives/alert-dialog/student" },
       { title: "Trung tâm anh Ngữ", hrefsub: "/docs/primitives/alert-dialog/school" },
    ]
  },
  {
    trigger: "Về chúng tôi",
    href: "/",
    content: [
      { title: "Giới thiệu chung", hrefsub: "/docs/primitives/alert-dialog/school" },
      { title: " Thông điệp giáo dục", hrefsub: "/docs/primitives/alert-dialog/student" },
       { title: "Tầm nhìn sứ mệnh", hrefsub: "/docs/primitives/alert-dialog/school" },
      { title: " Cơ sở vật chất", hrefsub: "/docs/primitives/alert-dialog/student" },
       { title: "Hợp tác quốc tế", hrefsub: "/docs/primitives/alert-dialog/school" },
      { title: "Thành tích nhà trường", hrefsub: "/docs/primitives/alert-dialog/student" }
    ]
  },
]
export default function MenubarPN() {
  return (
    <Menubar>
      {menulist.map((menuItem, index) => (
        <MenubarMenu key={index}>
          <MenubarTrigger >{menuItem.trigger}</MenubarTrigger>
          {menuItem.content && (
            <MenubarContent>
              {menuItem.content.map((subItem, subIndex) => (
                <MenubarItem key={subIndex}>
                {subItem.hrefsub && (
                    <Link href={subItem.hrefsub} className="hover:text-primary">
                    {subItem.title}
                  </Link>
                )}
                </MenubarItem>
              ))}
            </MenubarContent>
          )}
        </MenubarMenu>
      ))}
    </Menubar>
  )
}
