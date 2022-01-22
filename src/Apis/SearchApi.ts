import { AxiosResponse } from 'axios';
import { SentimentResults } from '../Models/SentimentResults';
import { get } from './Api';

export const getSentimentalResults = async (stock: String): Promise<SentimentResults> => {
  return await get(`/Sentiment`, { stock: stock }).then((response: AxiosResponse) => {
    console.log(response);
    // Transform
    const sentimentResults: SentimentResults = {
      negativity: response.data.Negative_score,
      neutrality: response.data.Neutral_score,
      positivity: response.data.Positive_score,
    };
    ////
    return sentimentResults;
  });
};

// TODO: CALL AUTOCOMPLETE API
