import React, { useState } from "react";
import Labels from "./components/Labels";
import { Icon } from "@iconify/react";
import { initialValue, maxGrade, numAspects, numStudents } from "./utils";
import { Toaster, toast } from "react-hot-toast";

export default function App(): React.JSX.Element {
  const [data, setData] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData({
      ...data,
      [e.target.name]: {
        ...data[e.target.name],
        [e.target.id]: +e.target.value,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Student Grades.json";
    link.click();
    toast.success("JSON downloaded");
  };

  return (
    <main className="flex flex-col px-[6vw] xl:px-[20vw] py-[6vw] gap-12 min-h-screen justify-center items-center">
      <Toaster
        toastOptions={{
          className: "font-semibold",
        }}
      />
      <h1>Student Grading App</h1>
      <section className="flex flex-col gap-6 w-full">
        <aside className="grid grid-cols-6 gap-4 text-center">
          <div className="col-span-2" />
          <Labels />
        </aside>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {[...Array(numStudents).keys()].map((i) => {
            return (
              <section
                key={i}
                className="grid grid-cols-6 gap-4 p-2 rounded-md border-[1px] border-gray-300"
              >
                <figure className="flex items-center gap-2 col-span-2">
                  <Icon icon="icon-park-solid:people" />
                  <label>Student {i + 1}</label>
                </figure>
                {/* Selects */}
                {[...Array(numAspects).keys()].map((j) => {
                  return (
                    <select
                      name={`aspek_penilaian_${j + 1}`}
                      id={`mahasiswa_${i + 1}`}
                      onChange={handleChange}
                      key={j}
                      value={
                        data[`aspek_penilaian_${j + 1}`][`mahasiswa_${i + 1}`]
                      }
                    >
                      <option>Select Grade</option>
                      {[...Array(maxGrade).keys()].map((k) => (
                        <option key={k + 1} value={k + 1}>
                          {k + 1}
                        </option>
                      ))}
                    </select>
                  );
                })}
              </section>
            );
          })}
          <button className="self-end bg-black" type="submit">
            Save
          </button>
        </form>
      </section>
    </main>
  );
}
