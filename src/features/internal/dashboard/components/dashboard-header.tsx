import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings, Bell, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="border-b-2 px-4 sm:px-6 py-3 sm:py-5 flex items-center justify-between gap-3">
      <div className="flex items-center flex-1 max-w-xs">
        <div className="sm:hidden bg-[#F7F7F7] p-2 rounded-lg">
          <Search className="w-5 h-5" />
        </div>
        <Input
          type="text"
          placeholder="Search"
          className="hidden sm:flex w-full"
        />
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="bg-[#F7F7F7] p-2 rounded-lg cursor-pointer hover:bg-stone-200 transition-colors">
          <Bell className="w-5 h-5" />
        </div>
        <div className="bg-[#F7F7F7] p-2 rounded-lg cursor-pointer hover:bg-stone-200 transition-colors">
          <Settings className="w-5 h-5" />
        </div>
        <Avatar className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer ring-2 ring-transparent hover:ring-orange-300 transition-all">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
