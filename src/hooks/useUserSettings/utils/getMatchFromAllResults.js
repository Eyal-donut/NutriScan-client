export const getMatchFromAllResults = (allResults) => {
    const categoriesMatchResults = allResults.map((res)=> res.isMatch)
    const noMatch = categoriesMatchResults.find((res)=> res === false)
    if (noMatch) return false
    const unknown = categoriesMatchResults.find((res)=> res === "Unknown")
    if(unknown) return "Unknown"
    const noFilters = categoriesMatchResults.find((res)=> res === true)
    if(noFilters) return true
    return "no filters"
  }