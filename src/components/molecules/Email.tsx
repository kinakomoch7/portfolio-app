import { NButton } from "../atomos/NButton"


export const Email = () => {

  return (
    <div className="flex flex-col justify-items-center">
      <NButton>送信</NButton>
      <NButton>キャンセル</NButton>
    </div>
  )
}
