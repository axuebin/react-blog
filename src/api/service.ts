import axios from '../lib/axios';
import {
  getArticleListPath,
  getHotArticleListPath,
  getTagsPath,
  getCategoryPath,
  getArchivePath,
  getDetailPath,
} from './api'

export const getArticleList = async (payload = {}): Promise<any> => {
  const response = await axios(getArticleListPath, payload, 'get');
  return response;
};

export const getHotArticleList = async (payload = {}): Promise<any> => {
  const response = await axios(getHotArticleListPath, payload, 'get');
  return response;
};

export const getCategory = async (payload = {}): Promise<any> => {
  const response = await axios(getCategoryPath, payload, 'get');
  return response;
};

export const getTags = async (payload = {}): Promise<any> => {
  const response = await axios(getTagsPath, payload, 'get');
  return response;
};

export const getArchive = async (payload = {}): Promise<any> => {
  const response = await axios(getArchivePath, payload, 'get');
  return response;
};

export const getDetail = async (payload = {}): Promise<any> => {
  const response = await axios(getDetailPath, payload, 'get');
  return response;
};
