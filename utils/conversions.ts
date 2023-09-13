import { gameRanks } from "./constants"
import { ReactSelectType } from "./types"

export const createSelectArray = (game: string) => {
    const ranks = gameRanks[game].ranks
    const selectValues: ReactSelectType[] = []
    for (const rank of ranks) {
        selectValues.push({ label: rank.name, value: rank.name })
    }

    return selectValues
}
