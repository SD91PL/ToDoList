import Task from './Task.jsx'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

export default function Tasks({ tasks, onDelete, onEdit, onStatus, maxLength }) {
	return (
		<section className='container p-4 mt-6'>
			<ul>
				<SortableContext
					items={tasks}
					strategy={verticalListSortingStrategy}>
					{tasks.map(task => (
						<Task
							key={task.id}
							id={task.id}
							text={task.txt}
							done={task.done}
							maxLength={maxLength}
							handleDelete={() => onDelete(task.id)}
							handleEdit={onEdit}
							handleStatus={onStatus}
						/>
					))}
				</SortableContext>
			</ul>
		</section>
	)
}
