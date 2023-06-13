import useWindowDimensions from "@mfc/helpers/hooks/useWindowDimensions";
import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import clsx from "clsx";
import MuiPagination from "@mui/material/Pagination";
import { PAGINATION } from "@mfc/helpers/constants/constants";

interface PageProps {
  className?: string;
  count?: number;
  page?: number;
  size?: number;
  listSize?: Array<number>;
  handleChangePage?: any;
  handleChangeSize?: any;
}

const Pagination = ({
  className,
  count,
  page,
  size,
  listSize,
  handleChangePage,
  handleChangeSize,
}: PageProps) => {
  const windowDimensions = useWindowDimensions();
  const isMobile = windowDimensions.width < 768;
  return (
    <div
      className={clsx(
        "flex items-center gap-[8px] p-2",
        isMobile ? "justify-end" : ""
      )}
    >
      <MuiPagination
        variant="outlined"
        shape="rounded"
        siblingCount={isMobile ? 0 : 1}
        boundaryCount={isMobile ? 0 : 1}
        sx={{
          "& .Mui-selected": {
            bgcolor: "unset!important",
            color: "#F05323",
            border: "1px solid #F05323",
          },
        }}
        className={className}
        count={count || 0}
        page={page || PAGINATION.page}
        onChange={(_, newPage) => {
          if (handleChangePage) handleChangePage(newPage);
        }}
      />
      <Select
        size="small"
        className="max-h-[32px] !flex"
        value={size || PAGINATION.size}
        onChange={handleChangeSize ? handleChangeSize : () => {}}
      >
        {(listSize || [10, 20, 50]).map((pageSize) => (
          <MenuItem key={pageSize} value={pageSize}>
            {`${pageSize} / trang`}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default Pagination;
