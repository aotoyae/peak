import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SCORE_BOARD = [
  {
    name: "Metrics",
    info: "본사 비즈니스 이점을 정량적으로 측정 가능한지 여부 확인",
    score: 0,
  },
  {
    name: "Economic Buyer",
    info: "구매 결정에 대한 전반적인 권한을 가진 사람, 또는 그룹",
    score: 0,
  },
  {
    name: "Decision Criteria",
    info: "차이를 만드는 기준이 무엇인지 이해하기",
    score: 0,
  },
  {
    name: "Decision Process",
    info: "고객이 솔루션을 평가, 선택 및 구매하는 프로세스",
    score: 0,
  },
  {
    name: "Identified Pain",
    info: "고객이 당면한 문제점이나 고충을 파악하는 영역",
    score: 0,
  },
  {
    name: "Champion",
    info: "고객 기업에 있는 내편으로 권한, 영향력, 신뢰도를 가진 사람이라면 금상첨화",
    score: 0,
  },
  {
    name: "Competition",
    info: "경쟁자나 비교가 되고 있는 기업을 면밀히 파악",
    score: 0,
  },
];

const FollowUp = () => {
  return (
    <main className="grid grid-cols-2">
      <h3 className="border-y border-r border-solid border-neutral-400 py-4 text-center text-lg font-bold">
        MEDDICC
      </h3>
      <h3 className="border-y border-solid border-neutral-400 py-4 text-center text-lg font-bold">
        리마인드
      </h3>
      <section className="flex flex-col gap-8 border-r border-solid border-neutral-400 p-4">
        <div>
          <h4 className="m-2 text-lg font-bold">스코어 보드</h4>
          <Table>
            <TableHeader className="bg-neutral-100">
              <TableRow>
                <TableHead className="w-[120px]">카테고리</TableHead>
                <TableHead>설명</TableHead>
                <TableHead>스코어</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SCORE_BOARD.map((category) => (
                <TableRow key={category.name}>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>{category.info}</TableCell>
                  <TableCell className="text-center">
                    {category.score}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div>
          <h4 className="m-2 text-lg font-bold">거래성사 가능성</h4>
          <Table>
            <TableHeader className="bg-neutral-100">
              <TableRow>
                <TableHead>가능성</TableHead>
                <TableHead>설명</TableHead>
                <TableHead>상세 설명</TableHead>
                <TableHead>키위 스코어</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Weak</TableCell>
                <TableCell>High Risk</TableCell>
                <TableCell>
                  딜 성사 가능성이 낮습니다. 우리 회사와 맞지 않을 가능성이
                  높습니다.
                </TableCell>
                <TableCell className="text-center">22</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default FollowUp;
