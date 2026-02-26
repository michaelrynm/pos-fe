import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Info } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CreateUserForm() {
  return (
    <div className="mt-5">
      <Card>
        <CardHeader className="border-b">
          <CardTitle>
            <div className="flex items-center gap-2">
              <Info size={20} color="orange" />
              User Information
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-10 gap10">
            {/* Name */}
            <Field>
              <FieldLabel htmlFor="name" className="font-normal">
                Full Name <span className="text-red-500">*</span>
              </FieldLabel>
              <Input type="text" id="name" />
            </Field>

            {/* Email */}
            <Field>
              <FieldLabel htmlFor="email" className="font-normal">
                Email <span className="text-red-500">*</span>
              </FieldLabel>
              <Input type="text" id="email" />
            </Field>

            {/* Password */}
            <Field>
              <FieldLabel htmlFor="password" className="font-normal">
                Password <span className="text-red-500">*</span>
              </FieldLabel>
              <Input type="password" id="password" />
            </Field>

            {/* Confirm password */}
            <Field>
              <FieldLabel htmlFor="confirm-password" className="font-normal">
                Confirm Password <span className="text-red-500">*</span>
              </FieldLabel>
              <Input type="password" id="confirm-password" />
            </Field>
          </div>

          {/* role */}
          <Field className="mt-10">
            <FieldLabel htmlFor="role" className="font-normal">
              Role <span className="text-red-500">*</span>
            </FieldLabel>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="light">Super Admin</SelectItem>
                  <SelectItem value="system">Admin</SelectItem>
                  <SelectItem value="dark">Cashier</SelectItem>
                  <SelectItem value="kithcen">Kitchen</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </CardContent>
        <CardFooter className="flex justify-end items-center gap-2">
          <Button className="bg-[#092C4C]">Cancel</Button>
          <Button className="bg-[#FE9F43]">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
