declare interface CommonComponentProps {
  className?: string | undefined;
}

declare type HttpResponseStatusType = 'success' | 'fail';

/**
 * HTTP 响应
 */
declare interface HttpResponse<T, E = unknown> {
  status: HttpResponseStatusType;
  code: number;
  data: T | null;
  error: E | null;
  message: string;
}

declare interface HttpListResponse<T, E = unknown> extends HttpResponse<T, E> {
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
