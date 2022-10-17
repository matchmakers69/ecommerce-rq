// const { data: user } = useQuery(['user', email], getUserByEmail)
// const userId = user?.id
// // Then get the user's projects

// const { isIdle, data: projects } = useQuery(
//   ['projects', userId],
//   getProjectsByUser,
//   {
//     // The query will not execute until the userId exists
//     enabled: !!userId,
//   }
//  )
