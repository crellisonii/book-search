import axios, { AxiosRequestConfig } from 'axios';
import { Arg, Query, Resolver } from "type-graphql";
import { Work } from './types';
import { baseUrl } from '../../constants/url.constant';


@Resolver()
export class WorksResolver {

  worksUrl = 'works/';
  urlSuffix = '.json';

  @Query(returns => Work)
  async getWorks(@Arg('worksId') input: string): Promise<Work> {
    try {
      console.log('get works input: ', input);
      const url = `${baseUrl}${this.worksUrl}${input}${this.urlSuffix}`;
      const options: AxiosRequestConfig = {
        url
      };
      console.log('get works options: ', options);
      const resp = await axios(options);
      return resp.data;
    }
    catch (e) {
      console.log("Error: ", e);
      throw new Error(e);
    }
  }

}