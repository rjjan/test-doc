import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";
// @ts-expect-error -- untyped
import { createTokenizer } from "@orama/tokenizers/mandarin";
import { stopwords as mandarinStopwords } from "@orama/stopwords/mandarin";
import { cn } from "fumadocs-ui/components/api";

export const { GET, search } = createFromSource(source, undefined, {
  localeMap: {
    // the prop name should be its locale code in your i18n config, (e.g. `cn`)
    "zh-TW": {
      // options for the language
      tokenizer: await createTokenizer({
        stopWords: mandarinStopwords,
      }),
      search: {
        threshold: 0.1,
        tolerance: 1,
      },
    },
  },
});
