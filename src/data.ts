export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: Data = {
  report: [
    {
      id: 'uuid1',
      source: 'Salary',
      amount: 12345,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },

    {
      id: 'uuid2',
      source: 'Youtube',
      amount: 123454567,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
  ],
};

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

data.report.push({
  id: 'uuid',
  source: 'salary',
  amount: 432563,
  created_at: new Date(),
  updated_at: new Date(),
  type: ReportType.EXPENSE,
});
