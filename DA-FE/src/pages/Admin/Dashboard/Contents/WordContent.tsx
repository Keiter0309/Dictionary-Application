import React from 'react';
import WordContentForm from '../../../../components/Admin/DashboardForm/Content/WordContent/WordContent';
import { AdminWordServices } from '../../../../services/admin/adminServices';

const WordContent: React.FC = () => {
  const handleCreateWord = async (
    word: string,
    meanings: string,
    definitionText: string,
    partOfSpeech: string,
    categoryName: string,
    exampleText: string,
    dialect: string,
    ipaText: string,
    usageExample: string,
    synonyms: string,
    antonyms: string,
  ) => {
    try {
      const response = await AdminWordServices.createWord(
        word,
        meanings,
        definitionText,
        partOfSpeech,
        categoryName,
        exampleText,
        dialect,
        ipaText,
        usageExample,
        synonyms,
        antonyms,
      );
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  return <WordContentForm onSubmit={handleCreateWord} />;
};

export default WordContent;
