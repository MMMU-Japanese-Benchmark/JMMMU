import { Figure } from "/@/molecules";
import imageTranslation from "/@/assets/image_translation.png";
import "./index.css";

const Method = () => {
  return (
    <div className="method">
      <h1 className="method-title">Benchmark Construction</h1>
      <div className="method-content">
        <span>
          JMMMU is based on the validation set of{" "}
          <a href="https://huggingface.co/datasets/MMMU/MMMU" target="_blank" rel="noreferrer noopener">
            MMMU benchmark
          </a>{" "}
          consisting of 900 questions in 30 subjects.{" "}
        </span>
        <span>
          We first examined the cultural dependencies in the original MMMU subjects and then translated culture-agnostic
          subjects into Japanese, and replaced culture-dependent subjects with new subjects that are conceptually
          similar, but better aligned with the Japanese context.{" "}
        </span>
        <span>As a result, JMMMU consists of 1,320 questions in 28 subjects, using 1,118 images. </span>
        <span>Here, we describe the dataset creation process in detail.</span>
        {/* Culture Dependencies */}
        <div className="examing-mmmu">
          <h2>Examining Cultural Dependencies in MMMU</h2>
          <span>
            Among the 30 subjects in MMMU, we've detected that questions in 6 subjects are particularly unfamiliar to
            Japanese people and thus we considered them to be culture-specific;{" "}
            <i>Geography, History, Literature, Art, Art Theory, and Sociology</i>.{" "}
          </span>
          <span>
            The rest of the subjects, often related to STEM fields (e.g.,{" "}
            <i>Biology, Chemistry, Computer Science, Electronics</i>) exist in Japan with similar contents, and thus we
            considered them to be culture-agnostic.{" "}
          </span>
          <span>
            Therefore, we deleted the 6 culture-specific subjects while keeping the remaining 24 culture-agnostic
            subjects in JMMMU.
          </span>
        </div>
        {/* Culture-Agnostic */}
        <div className="culture-agnostic">
          <h2>Translating Culture-Agnostic (CA) Subjects</h2>
          <span>
            In order to translate the questions in the 24 culture-agnostic subjects, we recruited 19 university
            students, including the authors, who have expert knowledge in the respective fields.{" "}
          </span>
          <span>
            We provided them with the original English texts, GPT-4o-translated Japanese question texts, and images.{" "}
          </span>
          <span>For texts, we asked the experts to</span>
          <ol type="i">
            <li>modify the auto-translated Japanese text to make it sound natural,</li>
            <li>
              verify that the technical terms and academic expressions conform to conventional usage in Japan, and
            </li>
            <li>
              change the currency to align with typical digit lengths in Japanese yen (&yen;). To avoid making the
              calculation unnecessarily complicated, we used a simplified conversion ($1 &rarr; &yen;100).
            </li>
          </ol>
          <span>
            For images, we asked the experts to overwrite the English text with Japanese text by using an image editing
            tool.{" "}
          </span>
          <span>
            As a result, we obtained 720 questions covering 24 culture-agnostic subjects, fully translated and adapted
            for the Japanese usage.
          </span>
          <Figure
            image={imageTranslation} // eslint-disable-line
            altText="An example of image translation"
            caption={
              <>
                Figure 2: <b>An example of image translation.</b> The original image (left) and the translated image
                (right) for the question. In this example, we are not only translating, but also converting currency
                units.
              </>
            }
          />
        </div>
        {/* Culture-Specific */}
        <div className="culture-specific">
          <h2>Creating Culture-Specific (CS) Subjects</h2>
          <span>
            Given that most of the deleted subjects are related to art or social sciences, we created the following new
            subjects to test similar knowledge in the Japanese context:
          </span>
          <ul>
            <li>
              <i>Japanese Art</i>: Questions about traditional Japanese art, such as Ukiyo-e and Noh.
            </li>
            <li>
              <i>Japanese Heritage</i>: Questions about traditional, high-value locations and buildings in Japan such as
              temples and shrines.
            </li>
            <li>
              <i>Japanese History</i>: Questions about historical incidents in Japan.
            </li>
            <li>
              <i>World History</i>: Questions about historical incidents in the World, but based on the content
              typically covered in Japanese textbooks to better reflect the Japanese educational context than{" "}
              <i>History</i> in MMMU.
            </li>
          </ul>
          <span>
            The images are primarily sourced from{" "}
            <a href="https://commons.wikimedia.org" target="_blank" rel="noreferrer noopener">
              Wikimedia Commons
            </a>
            , ensuring that all selected images are available under licenses suitable for public release.{" "}
          </span>
          <span>
            In crafting the questions, we emphasized creating multimodal challenges that require referencing{" "}
            <i>both the image and text</i> to answer.{" "}
          </span>
          <span>
            Specifically, we aimed to minimize the potential for guessing the correct answers solely from the question
            and choices.{" "}
          </span>
          <span>
            In a preliminary experiment using GPT-4o, the model was able to find subtle cues in the question or identify
            options that stood out from the rest, leading to a non-trivial number of correct answers under text-only
            reasoning.{" "}
          </span>
          <span>
            To counter this, we aimed to keep the question as simple as possible and ensure that no options stand out,
            making it hard to answer correctly without referring to the image.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Method;
