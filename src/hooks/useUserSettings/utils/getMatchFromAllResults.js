export const getMatchFromAllResults = (allResults) => {
    const categoriesMatchResults = allResults.map((res)=> res.isMatch)

    console.log(categoriesMatchResults)
    return categoriesMatchResults.includes(false)
    ? false 
    : categoriesMatchResults.includes("Unknown")
    ? "Unknown"
    : categoriesMatchResults.includes(true)
    ? true
    : "no filters"
  }