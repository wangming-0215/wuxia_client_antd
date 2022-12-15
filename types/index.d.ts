declare interface CommonComponentProps {
  className?: string | undefined;
}

declare type HttpResponseStatusType = 'success' | 'fail';

interface BaseHttpResponse<T, E = unknown> {
  status: HttpResponseStatusType;
  code: number;
  data: T | null;
  error: E | null;
  message: string;
}

declare interface HttpResponse<T> extends BaseHttpResponse<T> {
  data: T;
  error: null;
}

declare interface HttpError<E = unknown> extends BaseHttpResponse<null, E> {
  data: null;
  error: E;
}

declare interface HttpListResponse<T> extends HttpResponse<T, unknown> {
  data: {
    list: T[];
    total: number; // 总数
    total_pages: number; // 总页数
    page: number; // 当前页
    limit: number; // 每页条数
    hasPrev: boolean; // 是否有上一页
    hasNext: boolean; // 是否有下一页
  };
}
