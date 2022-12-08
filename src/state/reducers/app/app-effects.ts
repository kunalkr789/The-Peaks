import { createAsyncThunk } from "../../../middlewares/asyncThunk";
import {
  getSearchResults,
  getSportsNews,
  getTopNews,
} from "../../../services/api/app-service";

export const fetchTopNewsAction = "app/fetchTopNews";
export const fetchSportsNewsAction = "app/fetchSportsNews";
export const fetchSearchResultsAction = "app/fetchSearchResults";

export const fetchTopNewsEffect = () =>
  createAsyncThunk(fetchTopNewsAction, async function () {
    const response = await getTopNews();
    return response;
  });

export const fetchSportsNewsEffect = () =>
  createAsyncThunk(fetchSportsNewsAction, async function () {
    const response = await getSportsNews();
    return response;
  });

export const fetchSearchResultsEffect = (str: string, page: number) =>
  createAsyncThunk(fetchSearchResultsAction, async function () {
    const response = await getSearchResults(str, page);
    return response;
  });
