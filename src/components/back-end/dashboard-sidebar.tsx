import Link from "next/link";
import { Package, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ISidebarLinks } from "@/types/sidebar";
import { MdOutlineWebStories } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import { getAllCategories } from "@/actions/categories";
import { getShort } from "@/actions/shorts";

export default async function Sidebar() {
  const categories = await getAllCategories();
  const shorts = await getShort();

  const sidebarItems: ISidebarLinks[] = [
    {
      href: "/dashboard/shorts",
      label: "Shorts",
      icon: <MdOutlinePassword className='h-4 w-4' />,
      badge: `${shorts?.length}`,
    },
    {
      href: "/dashboard/categories",
      label: "Categories",
      icon: <TbCategoryFilled className='h-4 w-4' />,
      badge: `${categories?.length}`,
      active: false,
    },
  ];
  return (
    <div className='hidden bg-muted/40 border-r md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex gap-4 h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            <MdOutlineWebStories className='h-6 w-6 text-primary' />
            {/* <span className=''>Mosespace</span> */}
          </Link>
          <Button
            variant='outline'
            size='icon'
            className='ml-auto flex items-center gap-2 h-8 px-2 w-full'
          >
            <span className='line-clamp-1'>Invoice System</span>
            <Plus className='h-4 w-4' />
            <span className='sr-only'>Current Project</span>
          </Button>
        </div>
        <div className='flex-1'>
          <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
            {sidebarItems.map(({ href, label, icon, badge, active }) => (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  active
                    ? "bg-muted text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {icon}
                {label}
                {badge && (
                  <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center text-background justify-center rounded-full'>
                    {badge}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className='mt-auto p-4'>
          <Card x-chunk='dashboard-02-chunk-0'>
            <CardHeader className='p-2 pt-0 md:p-4'>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
              <Button size='sm' className='w-full'>
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
