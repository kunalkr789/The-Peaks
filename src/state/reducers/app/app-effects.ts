import { createAsyncThunk } from "../../../middlewares/asyncThunk";
import { getTopNews } from "../../../services/api/app-service";

export const fetchTopNewsAction = "app/fetchTopNews";

export const fetchTopNewsEffect = () =>
  createAsyncThunk(fetchTopNewsAction, async function () {
    const response = await getTopNews();
    return response;
  });
