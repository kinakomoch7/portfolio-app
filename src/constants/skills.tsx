import { PythonIcon } from "../common/images/PythonIcon"
import { ReactIcon } from "../common/images/ReactIcon"
import { CIcon } from "../common/images/CIcon"
import { JavaIcon } from "../common/images/JavaIcon"

const commonSize = 100

export const skills = {
  React: {
    message: "React",
    careerText: "1",
    revel: 5,
    icon: <ReactIcon size={commonSize} />,
  },
  python: {
    message: "python",
    careerText: "半",
    revel: 1,
    icon: <PythonIcon size={commonSize} />,
  },
  Clang: {
    message: "C言語",
    careerText: "1",
    revel: 3,
    icon: <CIcon size={commonSize} />,
  },
  Java: {
    message: "Java",
    careerText: "1",
    revel: 2,
    icon: <JavaIcon size={commonSize} />,
  }
}