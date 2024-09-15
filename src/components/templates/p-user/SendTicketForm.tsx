"use client";
import { baseURL } from "@/src/libs/types";
import { NewTicket } from "@/src/validators/frontend";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../modules/p-admin/Input";
import { priority } from "@/public/db";
import SelectBox from "../../modules/p-admin/SelectBox";
import Button from "../../modules/auth/Button/Button";

function SendTicketForm({ departments }: any) {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(NewTicket),
  });
  const [departmentId, setDepartmentId] = useState<String | null>(null);
  const [subDepartmentId, setSubDepartmentId] = useState<String | null>(null);
  const [subDepartments, setSubDepartments] = useState([]);

  const sendNewTicketHandler = async (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    const getAllSubdepartments = async () => {
      if (departmentId) {
        const res = await fetch(`${baseURL}/api/department/${departmentId}`);
        const subDepartments = await res.json();
        setSubDepartments(subDepartments);
      }
    };

    getAllSubdepartments();
  }, [departmentId]);

  return (
    <form
      onSubmit={handleSubmit(sendNewTicketHandler)}
      className="bg-namavaBlack text-white  rounded-md shadow p-[18px] mt-6 space-y-6"
    >
      <div className="relative flex flex-col">
        <label htmlFor="department" className="font-DanaDemiBold text-lg">
          دپارتمان
        </label>
        <select
          onChange={(e) => setDepartmentId(e.target.value)}
          id="department"
          className="outline-none bg-[#121212] text-white  mt-3  rounded-md py-3 px-4"
        >
          <option value="">دپارتمان مورد نظر را انتخاب کنید</option>
          {departments.map((department: any) => (
            <option value={department._id} key={department._id}>
              {department.title}
            </option>
          ))}
        </select>
      </div>
      {subDepartments.length > 0 && (
        <div className="relative flex flex-col">
          <label htmlFor="department" className="font-DanaDemiBold text-lg">
            زیر دپارتمان
          </label>
          <select
            onChange={(e) => setSubDepartmentId(e.target.value)}
            id="department"
            className="outline-none bg-[#121212] text-white  mt-3  rounded-md py-3 px-4"
          >
            <option value="">دپارتمان مربوطه را انتخاب کنید ...</option>
            {subDepartments.map((department: any) => (
              <option value={department._id} key={department._id}>
                {department.title}
              </option>
            ))}
          </select>
        </div>
      )}

      <SelectBox
        register={register}
        errors={errors}
        name="priority"
        options={priority}
        title="اولویت"
      />
      <div>
        <label htmlFor="title" className="font-DanaDemiBold text-lg">
          موضوع تیکت
        </label>
        <Input
          register={register}
          errors={errors}
          placeholder={"موضوع تیکت را وارد کنید ..."}
          name={"title"}
          type={"text"}
        />
      </div>
      <div>
        <label htmlFor="title" className="font-DanaDemiBold text-lg">
          متن تیکت
        </label>
        <Input
          register={register}
          errors={errors}
          placeholder={"متن  تیکت را وارد کنید ..."}
          name={"body"}
          type={"textarea"}
        />
      </div>
      <div className="flex items-center justify-end">
        <Button className="!w-full md:!w-[10%]">ارسال تیکت</Button>
      </div>
    </form>
  );
}

export default SendTicketForm;
