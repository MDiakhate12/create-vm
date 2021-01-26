PLAN="new-instance-plan"

terraform-init:
	cd terraform && \
		terraform init

terraform-plan:
	cd terraform && \
		terraform plan \
		-out="${PLAN}" \
		-var="instance_name=$(NAME)"

terraform-apply:
	cd terraform && \
		terraform apply ${PLAN}
