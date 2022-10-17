import { ReactNode } from "react";
import * as S from "./CodeArticle.styled";

type CodeArticleProps = {
  children: ReactNode;
};

const CodeArticle = ({ children }: CodeArticleProps) => {
  return (
    <S.CodeArticle>
      <S.CodeArticleleHeader>
        <S.CodeArticleleHeaderDotsWrapper>
          <S.CodeArticleleHeaderDotsWrapperInner>
            <S.CodeArticleleHeaderDot />
            <S.CodeArticleleHeaderDot />
            <S.CodeArticleleHeaderDot />
          </S.CodeArticleleHeaderDotsWrapperInner>
        </S.CodeArticleleHeaderDotsWrapper>
      </S.CodeArticleleHeader>
      <S.CodeArticlePre>
        <S.CodeArticleCode parentname="pre" originaltype="code" mdxtype="code">
          {children}
        </S.CodeArticleCode>
      </S.CodeArticlePre>
    </S.CodeArticle>
  );
};

export default CodeArticle;
