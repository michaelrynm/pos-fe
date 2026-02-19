import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Users,
  LogOut,
  Box,
  Grid2x2Plus,
  LayoutList,
  FileCheckCorner,
  Layers,
  LayersPlus,
  ShieldPlus,
  UserRoundCog,
  SettingsIcon,
} from "lucide-react";

const mainMenu = [
  { title: "Dashboard", icon: LayoutDashboard, url: "#" },
  { title: "Super Admin", icon: Users, url: "#" },
];

const productMenu = [
  { title: "Products", icon: Box, url: "#" },
  { title: "Create Product", icon: Grid2x2Plus, url: "#" },
  { title: "Category", icon: LayoutList, url: "#" },
  { title: "Variant Attributes", icon: FileCheckCorner, url: "#" },
];

const inventoryMenu = [
  { title: "Table Settings", icon: Layers, url: "#" },
  { title: "Area Settings", icon: LayersPlus, url: "#" },
];

const usersMenu = [
  { title: "User Management", icon: ShieldPlus, url: "#" },
  { title: "Role & Permission", icon: UserRoundCog, url: "#" },
];

const settingsMenu = [
  { title: "General Settings", icon: SettingsIcon, url: "#" },
  { title: "Logout", icon: LogOut, url: "#" },
];

export function InternalSidebar() {
  return (
    <Sidebar variant="sidebar">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary" />
          <div>
            <p className="text-sm font-semibold">Coffeshop POS System</p>
            <p className="text-xs text-muted-foreground">Internal Dashboard</p>
          </div>
        </div>
      </SidebarHeader>

      <hr className="border" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#092C4C]">Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="px-5">
          <hr className="border" />
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[#092C4C]">
            Product Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {productMenu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="px-5">
          <hr className="border" />
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[#092C4C]">
            Inventory Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {inventoryMenu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="px-5">
          <hr className="border" />
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[#092C4C]">
            User Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {usersMenu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="px-5">
          <hr className="border" />
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[#092C4C]">
            Settings
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsMenu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* <SidebarFooter className="p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-muted" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Budi Santoso</p>
            <p className="text-xs text-muted-foreground truncate">
              budi@example.com
            </p>
          </div>
          <SidebarMenuButton size="sm" className="w-auto">
            <LogOut className="h-4 w-4" />
          </SidebarMenuButton>
        </div>
      </SidebarFooter> */}
    </Sidebar>
  );
}
