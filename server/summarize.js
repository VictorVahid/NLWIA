import { pipeline } from "@xenova/transformers"

import { summaryExample } from "./utils/summary.js"

export async function summarize(text) {
  try {
     //return summaryExample
    
    console.log("Realizando o resumo...")
    const generator = await pipeline(
      "summarization",
      "Xenova/distilbart-cnn-12-6")

     const output = await generator(text);

      console.log("Resumo concluido com sucesso!")
      return output[0].summary_text
  } catch (error) {
    console.log("NÃO FOI POSSIVEL REALIZAR O RESUMO",error)
    throw new Error (error)
  }
}
