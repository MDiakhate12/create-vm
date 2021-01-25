terraform-init:
	cd terraform && \
		terraform init

terraform-plan:
	cd terraform && \
		terraform plan \
		-var="instance_name=$(NAME)"
