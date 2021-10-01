import { useRouter } from 'next/router'

const Team = () => {
  const router = useRouter()
  const { id } = router.query

  return <div>team:{id}</div>
}

export default Team
