import apiRequest from '../api/apiRequest';
import {
  IDataCreateConversation,
  IMessageQuery,
  TConversationQuery,
} from '../models';

export const getConversation = async (
  query: TConversationQuery = {}
) => {
  try {
    const res = await apiRequest.get('conversations', { params: query });
    return res.data;
  } catch (err) {
    console.log(err);
    
  }
};

export const createConversation = async (
  data: IDataCreateConversation,
) => {
  try {
    const res = await apiRequest.post('conversations', data);
    return res.data;
  } catch (err) {
    console.log(err);
    
  }
};

export const getMessages = async (
  query: IMessageQuery
) => {
  try {
    const res = await apiRequest.get(`messages/${query.id}`, {
      params: query,
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
