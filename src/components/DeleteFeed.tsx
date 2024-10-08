import { useNavigate } from "react-router-dom";
import { removeFeed } from "@/redux/feedSlice";
import { useAppDispatch } from "@/redux/hooks";
import { showView } from "@/redux/uiSlice";

interface DeleteFeedProps {
  id: string;
}

export default function DeleteFeed({ id }: DeleteFeedProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onConfirm = () => {
    dispatch(showView({ viewName: "none" }));
    // replace instead of push to avoid going back to a feed that no longer exists
    navigate("/");
    dispatch(removeFeed(id));
  };

  return (
    <div>
      <p className="primary-text title">Delete Feed</p>
      <p className="secondary-text text-xl mb-4">
        Are you sure you want to delete this feed?
      </p>

      <div className="flex gap-4">
        <button className="following-btn" onClick={onConfirm}>
          YES
        </button>
        <button
          className="border px-4 py-2 text-gray-500 text-xs font-semibold rounded-full dark:border-gray-600 hover:opacity-70"
          onClick={() => {
            dispatch(showView({ viewName: "none" }));
          }}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}
