import classNames from "classnames";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SidebarProps {
  toggle: boolean;
}

export function Sidebar({ toggle }: SidebarProps) {
  const { data } = useGetLessonsQuery();

  console.log(data);
  return (
    <aside
      className={classNames(
        "p-6 border-l border-gray-600 bg-gray-700 w-full md:w-[348px] absolute z-50 md:relative md:h-auto",
        {
          "left-[50%] translate-x-[50%] md:left-0 md:translate-x-0": !toggle,
          "left-0 translate-x-0": toggle,
        }
      )}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
